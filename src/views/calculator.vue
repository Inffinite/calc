<template>
  <div class="calculator">
    <div class="c-agent-overlay">
        <div>
            <div class="i-wrapper">
                <input v-model="code" placeholder="access code" type="password" class="p-input">
                <button @click="checkCode()" class="go">
                    Enter
                </button>
                <div @click="noCode()" class="no">
                    Dont know it!
                </div>
            </div>
        </div>
    </div>
    <div class="c-buttons">
        <div class="c-result">
            {{ result }}
        </div>
        <div class="c-calc">
            {{ calc }}
        </div>
        <div class="c-b-row">
            <button @click="calcClear()" class="c-btn">
                c
            </button>
            <button @click="calc = calc + ' ' + '^' + ' '" class="c-btn">
                ^
            </button>
            <button @click="calc = calc + ' ' + '%' + ' '" class="c-btn">
                %
            </button>
            <button @click="calc = calc + ' ' + '/' + ' '" class="c-btn-ops">
                ÷
            </button>
        </div>
        <div class="c-b-row">
            <button @click="calc = calc + '1'" class="c-btn">
                1
            </button>
            <button @click="calc = calc + '2'" class="c-btn">
                2
            </button>
            <button @click="calc = calc + '3'" class="c-btn">
                3
            </button>
            <button @click="calc = calc + ' ' + '*' + ' '" class="c-btn-ops">
                <svg class="c-delete cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/></svg>
            </button>
        </div>
        <div class="c-b-row">
            <button @click="calc = calc + '4'" class="c-btn">
                4
            </button>
            <button @click="calc = calc + '5'" class="c-btn">
                5
            </button>
            <button @click="calc = calc + '6'" class="c-btn">
                6
            </button>
            <button @click="calc = calc + ' ' + '-' + ' '" class="c-btn-ops">
                -
            </button>
        </div>
        <div class="c-b-row">
            <button @click="calc = calc + '7'" class="c-btn">
                7
            </button>
            <button @click="calc = calc + '8'" class="c-btn">
                8
            </button>
            <button @click="calc = calc + '9'" class="c-btn">
                9
            </button>
            <button @click="calc = calc + ' ' + '+' + ' '" class="c-btn-ops">
                <svg class="c-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/></svg>
            </button>
        </div>
        <div class="c-b-row">
            <button class="c-btn">
                0
            </button>
            <button @click="calc = calc + '.'" class="c-btn">
                .
            </button>
            <button @click="calcDelete()" class="c-btn">
                <svg class="c-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd"/></svg>
            </button>
            <button @click="calculation()" class="c-btn-equal">
                =
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { evaluate } from 'mathjs';
import gsap from 'gsap'
export default {
    data(){
        return{
            calc: '',
            result: '',
            code: ''
        }
    },

    methods: {
        async calculation(){
            if(this.calc == '76448'){
                return await gsap.to(".c-agent-overlay", {
                        ease: "power3.easeOut",
                        display: "flex",
                        opacity: 1,
                    });
            }

            this.result = await evaluate(this.calc)
        },

        calcDelete(){
            this.calc = this.calc.substring(0, this.calc.length - 1)
            this.result = ''
        },

        calcClear(){
            this.result = ''
            this.calc = ''
        },

        async checkCode(){
            if(this.code == 'alfa'){
                this.$router.push({ name: 'agent' })
            } else {
                await gsap.to(".c-agent-overlay", {
                    ease: "power3.easeOut",
                    display: "none",
                    opacity: 0,
                });
            }
        },

        async noCode(){
            await gsap.to(".c-agent-overlay", {
                ease: "power3.easeOut",
                display: "none",
                opacity: 0,
            });
        }
    }
}
</script>

<style>
@import "../theme/calculator.css";
</style>