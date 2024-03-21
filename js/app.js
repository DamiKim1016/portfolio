gsap.registerPlugin(ScrollTrigger);

const scene1 = gsap.timeline();
const scene2 = gsap.timeline();
const scene3 = gsap.timeline();
const scene4 = gsap.timeline();
const scene5 = gsap.timeline();
const scene6 = gsap.timeline();

ScrollTrigger.create({
    animation: scene1,
    trigger: '#s1 .rel',
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
});

scene1.to('#s1 .page_title', {
    opacity: 1,
    stagger: .3,
    x: -30
});

scene1.to('#s1 .detail_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene1.to('#s1 .img_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: -30
});

ScrollTrigger.create({
    animation: scene2,
    trigger: '#s2 .rel',
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
});

scene2.to('#s2 .detail_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: -30
});

scene2.to('#s2 .page_title', {
    opacity: 1,
    stagger: .3,
    x: 30
});

ScrollTrigger.create({
    animation: scene3,
    trigger: '#s3 .rel',
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
});

scene3.to('#s3 .detail_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene3.to('#s3 .img_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: -30
});

scene3.to('#s3 .page_title', {
    opacity: 1,
    stagger: .3,
    x: -30
});

ScrollTrigger.create({
    animation: scene4,
    trigger: '#s4 .rel',
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
});

scene4.to('#s4 .page_title', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene4.to('#s4 .img_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene4.to('#s4 .detail_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: -30
});

scene4.to('#s4 .page_title2', {
    opacity: 1,
    stagger: .3,
    y: 30
});

ScrollTrigger.create({
    animation: scene5,
    trigger: '#s5 .rel',
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
});

scene5.to('#s5 .folder_wrap > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene5.to('#s5 .page_title', {
    opacity: 1,
    stagger: .3,
    x: 30
});

ScrollTrigger.create({
    animation: scene6,
    trigger: '#s6 .rel',
    start: 'top 30%',
    end: 'top 50%',
    scrub: 3
});

scene6.to('#s6 .page_title', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene6.to('#s6 .txt1 > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene6.to('#s6 .txt2 > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene6.to('#s6 .txt3 > *', {
    opacity: 1,
    stagger: .3,
    x: 30
});

scene6.to('#s6 .name_title', {
    opacity: 1,
    stagger: .3,
    x: 30
});

