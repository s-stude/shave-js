(function(global) {

    var allTagsRe = /{[A-z.]+}/g,
        splitPropsRe = /\w+/g;

    function getProp(o, p) {

        if (!o || !o.hasOwnProperty(p)) {
            return;
        }

        return o[p];
    };

    function getObjVal(propNameSpase, dataObj) {

        var cached = dataObj,
            props = propNameSpase.match(splitPropsRe),
            p;

        while (props.length) {
            p = props.shift();

            cached = getProp(cached, p);
        }

        return cached;
    };

    var shave = function(input, dataObj) {

        var tagToObjVal = {},
            output = input,

            tags = input.match(allTagsRe),

            i, p,
            propNameSpase, objVal;

        if (!tags) {
            return input;
        }

        for (i = 0; i < tags.length; i++) {
            propNameSpase = tags[i];

            objVal = getObjVal(propNameSpase, dataObj);

            if (!objVal || typeof objVal === 'object') {
                objVal = propNameSpase;
            }

            tagToObjVal[propNameSpase] = objVal;
        }

        for (p in tagToObjVal) {
            output = output.replace(p, tagToObjVal[p]);
        }

        return output;
    };

    global.shave = shave;

})(window);