<template>
  <main class="main">
    <div class="countdown">
      <div class="time">
        <span>{{ Math.floor(countdown.time / 60) }}</span>
        <span>:</span>
        <span>{{
          countdown.time % 60 < 10
            ? `0${countdown.time % 60}`
            : countdown.time % 60
        }}</span>
      </div>
      <div class="adjustment">
        <button class="adjustment-btn" @click="increaseTime">+</button>
        <button class="adjustment-btn" @click="decreaseTime">-</button>
      </div>
    </div>
    <div class="controls">
      <button v-if="!countdown.isActive" class="controls-btn" @click="start">
        Start
      </button>
      <button
        v-if="countdown.time !== 0 && countdown.isActive"
        class="controls-btn"
        @click="pause"
      >
        Pause
      </button>
      <button v-if="countdown.isActive" class="controls-btn" @click="reset">
        Reset
      </button>
    </div>
  </main>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    let countdown = reactive({
      time: 60,
      isActive: false,
      interval: "",
    });
    function start() {
      countdown.interval = setInterval(() => {
        countdown.time--;
        if (countdown.time === 0) clearInterval(countdown.interval);
      }, 1000);
      countdown.isActive = true;
    }
    function pause() {
      clearInterval(countdown.interval);
      countdown.isActive = false;
    }
    function reset() {
      clearInterval(countdown.interval);
      countdown.time = 60;
      countdown.isActive = false;
    }
    function increaseTime() {
      countdown.time += 5;
    }
    function decreaseTime() {
      if (countdown.time >= 5) {
        countdown.time -= 5;
      }
    }
    return {
      countdown,
      start,
      pause,
      reset,
      increaseTime,
      decreaseTime,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@500;700&display=swap");
body,
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: black;
  font-family: "Mulish", sans-serif;
}
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.time {
  line-height: 550px;
  color: white;
}
.countdown {
  font-size: 550px;
  font-weight: 700;
}
.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.controls-btn {
  width: 100px;
  height: 40px;
  background: #ffd21f;
  border-style: none;
  cursor: pointer;
  border-radius: 20px;
}
.controls-btn:hover {
  transform: scale(1.1);
}
.adjustment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  gap: 20px;
}
.adjustment-btn {
  font-family: "Mulish", sans-serif;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 35px;
  padding-bottom: 5px;
  border-style: none;
  background: #ffd21f;
  cursor: pointer;
}
.adjustment-btn:hover {
  transform: scale(1.1);
}
</style>
