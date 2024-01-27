const backgroundTexturedata = Array.from({ length: 20 }, (_, index) => ({
    src: `https://picsum.photos/400/400?random=${index + 1}`,
    fallback: `${index + 1}`,
}));

export { backgroundTexturedata };