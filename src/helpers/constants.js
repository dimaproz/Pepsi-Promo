export const scrollOptions = {
    scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        scrollingX: false,
        scrollingY: true,
    },
    rail: {
        background: '#ff0000',
        size: '11px',
        opacity: 1,
        specifyBorderRadius: "none",
    },
    bar: {
        background: '#33bbef',
        keepShow: true,
        size: '100%',
    },
}

export const phoneValidator = (phone) =>
    /^\+38\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone)