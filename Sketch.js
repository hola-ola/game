    <!--Intro screen-->
    <div class="intro-screen">
      <div class="div-left"></div>

      <div class="div-center">
        <div class="div-center-top">
        </div>

        <div class="div-center-middle">
          <h2>The rules of the game</h2>
          <p>Crazy virus has attacked the world. <br> Make sure not to get infected!</p>
          <p>The virus mutates. It's actually funny.</p>
          <p>YOLST<br>You Only Live Six Times</p>
        </div>

        <div class="div-center-bottom"></div>
      </div>

      <div class="div-right"></div>

    </div>

    .intro-screen {
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.div-left {
    background: black;
    height: 800px;
    width: 250px;
}

.div-right {
    background: black;
    height: 800px;
    width: 250px;
}

.div-center {
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.div-center-top {
    background: black;;
    height: 200px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.div-center-middle {
    background:black;
    height: 600px;
    width: 33%;
    margin: 0 auto 0 auto;
}

.div-center-middle h2, .div-center-middle p {
    color: antiquewhite;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
}

.div-center-middle p {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
}

.div-center-middle h2 {
    padding-bottom: 20px;
    padding-top: 20px;
}

#start-btn {
    width: 150px;
    font-size: 24px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: none;
    border-radius: 5px;
    background-color:antiquewhite;
    position: relative;
    text-align: center;
}

.intro-screen, .game {
    position: absolute;
}

.intro-screen {
    z-index: 1;
}

.game {
    height: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

body {
    position: relative;
}

.body1 {
    background-color: black;
}

.body2 {
    background-color:antiquewhite;
}

.body3 {
    background-color: blue;
}

.body4 {
    background-color: Magenta;
}

.body5 {
    background-color: lime;
}

.p5Canvas {
    position: relative;
}

h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 50px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: lighter;
}

.title1 {
    color: antiquewhite;
}

.title2 {
    color: black;
}

.title3 {
    color: aquamarine;
}

.title4 {
    color: darkblue;
}

.title5 {
    color: indigo;
}

#counters {
    display: flex;
    position: relative;
    bottom: 200px;
}

#counters h2 {
    font-weight: 300;
    font-size: 24px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#counters div {
    padding-left: 70px;
    padding-right: 70px;
    padding-bottom: 0px;
}

.count1 {
    color: antiquewhite;
}

.count2 {
    color: black;
}

.count3 {
    color: aquamarine;
}

.count4 {
    color: darkblue;
}

.count5 {
    color: indigo;
}

.life-level {
    position: relative;
    top: 300px;
}

.life-level table {
    text-align: center;
    margin-top: 50px;
}

.life-level th {
    width: 50px;
    height: 25px;
}

#level-1 {
    background-color:brown;
}

#level-2 {
    background-color: orangered;
}

#level-3 {
    background-color: orange;
}

#level-4 {
    background-color: yellow;
}

#level-5 {
    background-color: yellowgreen;
}

#level-6 {
    background-color: green;
}

.reset div {
    position: relative;
}

#reset-btn {
    height: 40px;
    width: 150px;
    font-size: 24px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: none;
    border-radius: 5px;
    position: absolute;
    left: 45%;
}

.btn1 {
    background-color:antiquewhite;
}

.btn2 {
    background-color: black;
    color: antiquewhite;
}

.btn3 {
    background-color: aquamarine;
    color: darkviolet;
}

.btn4 {
    background-color: greenyellow;
    color: indigo;
}

.btn5 {
    background-color: indigo;
    color: lime;
}