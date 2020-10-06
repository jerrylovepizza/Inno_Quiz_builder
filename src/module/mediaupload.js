export const customMediaLibrary = window.wp.media({
    frame: "select",
    title: "Select Images",
    multiple: false,
    library: {
        order: "DESC",

        orderby: "date",
        type: "image",
        search: null,
        uploadedTo: null
    },

    button: {
        text: "Done"
    }
});

// export const customMediaLibrary = ""