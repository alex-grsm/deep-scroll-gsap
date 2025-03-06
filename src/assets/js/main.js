import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const layers = document.querySelectorAll('.layer');

    // Плавное масштабирование всех слоев
    layers.forEach((layer, index) => {
        gsap.to(layer, {
            scale: 1 + index * 0.25,
            ease: 'none',
            scrollTrigger: {
                trigger: '#scene',
                start: 'top top',
                end: '1300vh top',
                scrub: 1.5,
            },
        });
    });

    // Исчезновение заголовка
    gsap.to('.layer__content', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '#scene',
            start: '100vh top',
            end: '400vh top',
            scrub: 1.5,
        },
    });

    // Плавное появление мидл-блока (раньше и дольше)
    gsap.to('.layer__middle', {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#scene',
            start: '500vh top', // Появляется раньше
            end: '800vh top', // Остается дольше
            scrub: 1.5,
        },
    });

    // Плавное исчезновение мидл-блока (позже и мягче)
    gsap.to('.layer__middle', {
        opacity: 0,
        filter: 'blur(15px)',
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#scene',
            start: '1000vh top', // Исчезает позже
            end: '1200vh top', // Дольше уходит
            scrub: 1.5,
        },
    });

    // Плавное появление preend-блока (раньше, чтобы заменить middle)
    gsap.to('.layer__preend', {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#scene',
            start: '1100vh top',
            end: '1400vh top',
            scrub: 1.5,
        },
    });

    // Плавное исчезновение preend-блока (до появления финального слоя)
    gsap.to('.layer__preend', {
        opacity: 0,
        filter: 'blur(15px)',
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#scene',
            start: '1500vh top',
            end: '1700vh top',
            scrub: 1.5,
        },
    });

    // Финальный слой
    gsap.to('.layer__end', {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#scene',
            start: '1600vh top',
            end: '1700vh top',
            scrub: 1.5,
        },
    });

    // Затемнение фона
    gsap.to('.bg-overlay', {
        opacity: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#scene',
            start: '1700vh top',
            end: '1800vh top',
            scrub: 1.5,
        },
    });
});
