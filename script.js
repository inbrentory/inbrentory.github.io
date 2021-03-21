//this part is the shrinking navbar src:https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp/
viewConfig: {
    loadingText: lang.loading,
    loadMask: true,
    stripeRows: true,
    getRowClass: function(record, rowIndex, rowParams, store) {
        return 'multiline-row';
    }
},