module.exports = {
    options: {
        banner: '/*************************************************** \n' +
            '******   <%= pkg.name %> - <%= pkg.description%>\n' +
            '******   <%= pkg.homepage%> \n' +
            '******   v<%= pkg.version%> \n' +
            '******   <%= pkg.author%> \n' +
            '****************************************************/\n'
    },
    dist: {
        src: ['<%= vars.srcdir %>/**/*.js'],
        dest: '<%= vars.dist %>/shave.js'
    }
};