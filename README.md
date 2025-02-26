## Learning About Event Listeners in JavaScript  

Event listeners allow you to execute JavaScript code when a specific event occurs on an element.  

### How to Use Event Listeners  

You can attach an event listener using the `addEventListener` method:  

```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});



## Scenarios to Use Event Listeners in JavaScript  

### **User Interaction Events**  
- **Button Click** – Trigger an action when a button is clicked.  
- **Form Submission** – Validate inputs before submitting a form.  
- **Text Input Changes** – Detect when a user types in a text field.  
- **Checkbox Toggle** – Perform an action when a checkbox is checked/unchecked.  
- **Dropdown Selection** – Update content based on a selected option.  

### **Mouse Events**  
- **Hover Over an Element (`mouseover`)** – Show tooltips or highlight elements.  
- **Mouse Leave (`mouseout`)** – Hide tooltips or reset styling.  
- **Right-Click (`contextmenu`)** – Show a custom context menu.  
- **Drag and Drop (`dragstart`, `dragover`, `drop`)** – Implement a drag-and-drop feature.  
- **Double Click (`dblclick`)** – Trigger an action on double-click instead of single click.  

### **Keyboard Events**  
- **Key Press (`keydown`, `keyup`)** – Detect user input in a search bar.  
- **Enter Key in Input Field** – Submit a form when Enter is pressed.  
- **Arrow Key Navigation** – Move elements around with arrow keys.  
- **Shortcut Keys (`keydown` with `Ctrl`/`Shift`)** – Implement keyboard shortcuts.  

### **Window and Document Events**  
- **Page Load (`DOMContentLoaded`)** – Run code when the page is fully loaded.  
- **Resize Event (`resize`)** – Adjust layout dynamically when the window is resized.  
- **Scroll Event (`scroll`)** – Load more content when scrolling (infinite scroll).  
- **Detect When User Leaves Page (`beforeunload`)** – Show a warning before closing the page.  

### **Touch Events (For Mobile Devices)**  
- **Tap Event (`touchstart`)** – Detect when a user touches an element.  
- **Swipe Gesture (`touchmove`)** – Implement swipe navigation.  
- **Long Press (`touchend` with timer)** – Detect when a user holds down on an element.  

### **Media Events**  
- **Play/Pause Video (`play`, `pause`)** – Update UI when a video starts or stops.  
- **Audio Volume Change (`volumechange`)** – Show volume level updates.  

### **Network and Connectivity**  
- **Online/Offline Detection (`online`, `offline`)** – Alert the user when they lose internet connection.  

### **Timers and Animations**  
- **CSS Animation Completion (`animationend`)** – Trigger an action after an animation finishes.  
- **Timeout Expiration (`setTimeout`)** – Execute code after a delay.  
