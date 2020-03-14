<template>
    <div>
        <div class="container-fluid p-0">
            <div class="row">
                <div class="col-xl-12">
                    <b-carousel
                            id="carousel-1"
                            v-model="slide"
                            :interval="4000"
                            controls
                            indicators
                            background="#ababab"
                            img-width="1024"
                            img-height="480"
                            style="text-shadow: 1px 1px 2px #333;"
                            @sliding-start="onSlideStart"
                            @sliding-end="onSlideEnd"
                    >
                        <b-carousel-slide
                                v-for="ad of ads"
                                :key="ad.id"
                                :img-src="ad.imageSrc"
                        >
                        </b-carousel-slide>
                    </b-carousel>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="d-flex flex-wrap justify-content-center">
                    <div v-for="ad of ads" class="card m-4" style="width: 18rem;">
                        <img :src="ad.imageSrc" class="card-img-top" :alt="ad.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ad.title}}</h5>
                            <p class="card-text">
                                {{ad.description}}
                            </p>
                            <router-link class="btn btn-dark" :to="'/ad/' + ad.id">Open</router-link>
                            <a href="#" class="btn btn-dark">Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null,
                ads: [
                    {
                        title: 'First ad',
                        description: 'Hello I am description',
                        promo: false,
                        imageSrc: 'https://picsum.photos/1024/480/?image=52',
                        id: '1',
                    },
                    {
                        title: 'First ad',
                        description: 'Hello I am description',
                        promo: false,
                        imageSrc: 'https://picsum.photos/1024/480/?image=54',
                        id: '2',
                    },
                    {
                        title: 'First ad',
                        description: 'Hello I am description',
                        promo: false,
                        imageSrc: 'https://picsum.photos/1024/480/?image=58',
                        id: '3',
                    },
                    {
                        title: 'First ad',
                        description: 'Hello I am description',
                        promo: false,
                        imageSrc: 'https://picsum.photos/1024/480/?image=55',
                        id: '4',
                    },
                    {
                        title: 'First ad',
                        description: 'Hello I am description',
                        promo: false,
                        imageSrc: 'https://picsum.photos/1024/480/?image=60',
                        id: '5',
                    },
                    {
                        title: 'First ad',
                        description: 'Hello I am description',
                        promo: false,
                        imageSrc: 'https://picsum.photos/1024/480/?image=61',
                        id: '6',
                    },
                ]
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

