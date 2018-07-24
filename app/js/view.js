import Vue from 'vue';

export default function view(images) {
    new Vue({
        el : "main",

        mounted() {
            window.addEventListener('hashchange', this.go.bind(this));
            this.go();
        },

        computed : {
            img() {
                return this.current ? this.images.filter(i => i.id === this.current)[0] : {};
            },

            state() {
                return this.current ? 'detail' : 'grid';
            }
        },

        methods : {
            go() {
                const hash = window.location.hash.slice(1);
                this.current = !!hash ? parseInt(hash) : null;

                if (this.state === 'detail') {
                    this.scrollY = window.scrollY;
                }

                const nextScroll = this.state === 'detail' ? 0 : this.scrollY;

                Vue.nextTick(() => {
                    window.scrollTo(0, nextScroll);
                });
            }
        },

        data : {
            current : null,
            images,
            scrollY : 0
        }
    });
}