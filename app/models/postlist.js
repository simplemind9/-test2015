exports.definition = {
    config : {
        adapter: {
    type: "parse"
        }
        // table schema and adapter information
    },

    extendModel: function(Model) {
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model
            _parse_class_name: "PostList"
        });

        return Model;
    },

    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // Extend, override or implement Backbone.Collection
            _parse_class_name: "PostList",

            defaultFetchData : {},
            fetch: function(options) {
                options = options || {};
                options.query = _.extend(options.query || {}, this.defaultFetchData);
                Backbone.Collection.prototype.fetch.call(this, options);
            }
        });

        return Collection;
    }
};
