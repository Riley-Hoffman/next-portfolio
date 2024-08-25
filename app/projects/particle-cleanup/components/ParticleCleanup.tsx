'use client'
import { useRef, useCallback, useState, useMemo } from 'react';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Particle } from '../classes/Particle';
import { useParticleCleanupEvents } from '../hooks/useParticleCleanupEvents';

type Refs = {
  canvas: HTMLCanvasElement | null;
  container: HTMLDivElement | null;
  particlesArray: Particle[];
  animationFrameId: number;
  allClean: boolean;
  startTime: number | null;
  elapsedTime: number;
  cursorInsideCanvas: boolean;
  isMobile: boolean | null;
};

type State = {
  time: number | null;
  gameInProgress: boolean;
  gameCompletedOnce: boolean;
  cursorMessage: string;
  cursorMessageRead: boolean;
};

export const ParticleCleanup: React.FC = () => {
  const refs = useRef<Refs>({
    canvas: null,
    container: null,
    particlesArray: [],
    animationFrameId: -1,
    allClean: false,
    startTime: null,
    elapsedTime: 0,
    cursorInsideCanvas: false,
    isMobile: null,
  });

  const [state, setState] = useState<State>({
    time: null,
    gameInProgress: true,
    gameCompletedOnce: false,
    cursorMessage: '',
    cursorMessageRead: true,
  });

  const mouse = useMemo(() => ({ x: 0, y: 0, radius: 150 }), []);

  const updateCursorPosition = useCallback((clientX: number, clientY: number) => {
    if (!refs.current.canvas) return;

    const rect = refs.current.canvas.getBoundingClientRect();
    mouse.x = clientX - rect.left;
    mouse.y = clientY - rect.top;

    if (refs.current.startTime === null) {
      refs.current.startTime = Date.now();
    }
  }, [mouse]);

  const sayMessageTemporarily = useCallback((message: string) => {
    setState(prevState => ({
      ...prevState,
      cursorMessage: message,
      cursorMessageRead: false,
    }));
    setTimeout(() => setState(prevState => ({ ...prevState, cursorMessageRead: true })), 10);
  }, []);

  const handleInteraction = useCallback((event: Event, isInside: boolean) => {
    const isTouchEvent = event.type.startsWith('touch');
    const clientX = isTouchEvent ? (event as TouchEvent).touches?.[0]?.clientX : (event as MouseEvent).clientX;
    const clientY = isTouchEvent ? (event as TouchEvent).touches?.[0]?.clientY : (event as MouseEvent).clientY;
  
    if (clientX !== undefined && clientY !== undefined) {
      if (['mousemove', 'touchmove'].includes(event.type)) {
        updateCursorPosition(clientX, clientY);
      }
  
      if (refs.current.cursorInsideCanvas !== isInside) {
        refs.current.cursorInsideCanvas = isInside;
        if (isInside && refs.current.container) {
          setTimeout(() => {
            refs.current.container?.scrollIntoView({ block: 'center', behavior: 'smooth' });
          }, 100);
        }
  
        if (state.gameInProgress) {
          sayMessageTemporarily(`Your cursor has ${isInside ? 'entered' : 'exited'} Particle Cleanup Game play area`);
        }
      }
  
      if (isTouchEvent) {
        event.preventDefault();
      }
    }
  }, [updateCursorPosition, state.gameInProgress, sayMessageTemporarily]);


  const handleScroll = useCallback((event: Event) => {
    if (state.gameInProgress && refs.current.cursorInsideCanvas) {
      event.preventDefault();
    }
  }, [state.gameInProgress]);

  const createParticle = useCallback((canvas: HTMLCanvasElement) => {
    const { width, height } = canvas;
    const size = Math.random() * 30 + 10;
    const colors = ['#A8A0D9', '#794E8D', '#ae4971'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const weight = Math.random() * 0.5 + 0.5;
    const isMobile = refs.current.isMobile;
    const isTallScreen = window.innerHeight > 800;
    const speedFactor = (isMobile ? 0.4 : 0.8) * (isTallScreen ? 0.54 : 1) * (state.gameCompletedOnce ? 0.4 : 0.8);

    return new Particle(Math.random() * width, Math.random() * height, size, color, weight, speedFactor);
  }, [state.gameCompletedOnce]);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    refs.current.particlesArray = Array.from({ length: 150 }, () => createParticle(canvas));
  }, [createParticle]);

  const animateParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let remainingParticles = false;

    refs.current.particlesArray.forEach(particle => {
      particle.update(ctx, mouse, canvas);
      if (particle.inCanvas) remainingParticles = true;
    });

    if (!remainingParticles) {
      if (!refs.current.allClean) {
        refs.current.allClean = true;
        refs.current.elapsedTime = parseFloat(((Date.now() - refs.current.startTime!) / 1000).toFixed(1));
        setState(prevState => ({
          ...prevState,
          time: refs.current.elapsedTime,
          gameInProgress: false,
          gameCompletedOnce: true,
        }));
        document.getElementById('completionMessage')?.focus();
        refs.current.container?.classList.add('done');
      } else {
        cancelAnimationFrame(refs.current.animationFrameId!);
      }
    } else {
      refs.current.animationFrameId = requestAnimationFrame(() => animateParticles(ctx, canvas));
    }
  }, [mouse]);

  const initializeAnimation = useCallback(() => {
    const ctx = refs.current.canvas?.getContext('2d');
    const container = refs.current.container;

    if (container?.classList.contains('done')) container.classList.remove('done');

    if (container) {
      const { width, height } = container.getBoundingClientRect();
      if (refs.current.canvas) {
        refs.current.canvas.width = width;
        refs.current.canvas.height = height;
      }
      refs.current.isMobile = window.innerWidth <= 768;

      initParticles(refs.current.canvas!);
      animateParticles(ctx!, refs.current.canvas!);
    }
  }, [initParticles, animateParticles]);

  useParticleCleanupEvents(refs, handleInteraction, handleScroll, initializeAnimation);

  const getMedalDetails = useCallback((time: number | null) => {
    if (time !== null) {
      if (time <= 25) {
        if (time > 20) return { text: 'Bronze Medal', color: '#A2652A' };
        if (time > 15) return { text: 'Silver Medal', color: '#737373' };
        return { text: 'Gold Medal', color: '#8A7400' };
      }
    }
    return null;
  }, []);

  const medalDetails = useMemo(() => refs.current.allClean ? getMedalDetails(state.time) : null, [getMedalDetails, state.time]);

  const reloadAnimation = useCallback(() => {
    cancelAnimationFrame(refs.current.animationFrameId!);
    Object.assign(refs.current, {
      allClean: false,
      startTime: null,
      elapsedTime: 0,
      cursorInsideCanvas: false,
      particlesArray: [],
      isMobile: null,
    });
    setState(prevState => ({
      time: null,
      gameInProgress: true,
      gameCompletedOnce: prevState.gameCompletedOnce,
      cursorMessage: '',
      cursorMessageRead: true,
    }));
    initializeAnimation();
  }, [initializeAnimation]);

  return (
    <>
      <div ref={(el) => {refs.current.container = el}} className="h-[31.25rem] mx-5 pt-28 overflow-hidden rounded-sm border-2 border-solid border-pink-200 bg-wood bg-cover bg-right cursor-grabbing [&.done]:cursor-default particle-cleanup overlay" role="application" aria-label="Cleanup Game" tabIndex={-1}>
        <canvas className="w-full absolute top-0 left-0 drop-shadow-[0.063rem_0.063rem_0_#00000061]" ref={(el) => {refs.current.canvas = el}} />
        <div className="w-full h-full border-1 boder-solid border-pink-200 absolute top-0 left-0">
          {refs.current.allClean && (
            <p id="completionMessage" className="w-full h-full flex flex-col justify-center items-center font-source-sans absolute p-0 m-0 text-2xl text-center bg-white completion-message" tabIndex={-1}>
              All clean! <small aria-live="polite">Time taken: <span className="font-semibold" aria-live="polite">{state.time} seconds</span></small>
              <span className="font-extrabold uppercase" aria-live="polite">
                {medalDetails && (
                  <span className="text-xl leading-normal md:text-2xl md:leading-normal" aria-live="polite">
                    {medalDetails.text} <br />
                    <FontAwesomeIcon className="block mx-auto text-6xl animate-[spin_2.4s_infinite]" icon={faMedal} color={medalDetails.color} />
                  </span>
                )}
              </span>
            </p>
          )}
        </div>
      </div>
      {state.gameInProgress && !refs.current.allClean && (
        <p className={`sr-only ${state.cursorMessageRead ? '' : 'hidden'}`} aria-live="polite">
          {state.cursorMessage}
        </p>
      )}
      <p><button className="p-3 button" onClick={reloadAnimation}>Play Again</button></p>
    </>
    );
  };