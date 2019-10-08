Vue.component("RoomInformation", {
  methods: {
    Log: function(event) {
      console.log(event);
    }
  },
  template: `
    <div class="rightBox">
      <div class="right_tableContainer">
        <div class="right_tableAssignments">
          <p>32 out of 32 viewpoints assigned</p>
        </div>
        <div class="right__tableTitle">
          <div class="right__tableValues">
            <div class="right__tableValuesName">
              <p>Room Name</p>
            </div>
            <div class="right__tableInfoLogo"></div>
          </div>
          <div>
            <p>Viewpoints</p>
          </div>
        </div>
        <div class="right_tableRooms">
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div class="right_tableRoomValuesTextBox">
                <p class="right_tableRoomValuesText">Hallway</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office A</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office B</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right__elem right_tableRoomValues">
            <div class="right__elem right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office C</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office D</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Kitchen</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office E</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office F</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
          <div class="right_tableRoomValues">
            <div class="right_tableRoomValuesLeft">
              <div class="right_tableRoomValuesLeftLogoX"></div>
              <div>
                <p class="right_tableRoomValuesText">Office G</p>
              </div>
              <div class="right_tableRoomValuesLeftPencile"></div>
              <div class="right_tableRoomValuesLeftTrash"></div>
            </div>
            <div class="right_tableRoomValuesRightDots">
              <div class="right_tableRoomValuesRightDotPath"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="right__bottomButtonsWrapper">
        <div class="right__bottomButtons">
          <div class="right__bottomButtons">
            <div class="right__bottomButtonsSave">
              <p class="right__buttonText">Save & Exit</p>
            </div>
            <div class="right__bottomButtonsContinue">
              <p class="right__buttonText">Continue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

var rightBox = new Vue({
  el: ".rightBox",
  template: `
    <div>
      <RoomInformation/>
    </div>
  `
});
