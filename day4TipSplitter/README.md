# Tip Splitter App 

A beautiful, responsive tip calculator and bill splitter web application built with HTML, CSS, and JavaScript. Perfect for splitting restaurant bills among friends or calculating tips quickly and accurately.

![Tip Splitter Screenshot](screenshot.png)
## 🌟 Features

- **Modern UI**: Clean, gradient-based design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Quick Tip Selection**: Pre-set tip percentages (15%, 18%, 20%, 22%, 25%, 30%)
- **Custom Tip Input**: Enter any custom tip percentage
- **Bill Splitting**: Split the total amount among multiple people
- **Real-time Calculations**: Instant updates as you type
- **Currency Support**: Displays amounts in FCFA (Central African CFA Franc)
- **Keyboard Support**: Press Enter to calculate
- **Reset Functionality**: Clear all inputs with one click

## 📱 Screenshots
![Tip Splitter Screenshot](./screenshot.png)
## 🚀 Getting Started


### Installation
1. Download the HTML file
2. Open it in any web browser
3. Start calculating tips immediately!

### Usage
1. **Enter Bill Amount**: Input the total bill amount in FCFA
2. **Select Tip Percentage**: Choose from preset options (15%-30%) or enter a custom percentage
3. **Set Number of People**: Specify how many people are splitting the bill
4. **View Results**: The app instantly calculates:
   - Subtotal (original bill amount)
   - Tip amount
   - Total amount (bill + tip)
   - Amount per person

## 💻 Technical Details

### Built With
- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Glassmorphism effects with backdrop-filter
  - Responsive design with media queries
- **Vanilla JavaScript**: 
  - Event handling
  - DOM manipulation
  - Real-time calculations
  - Form validation

### Key JavaScript Functions
- `calculate()`: Performs all tip and splitting calculations
- `handleCustomTip()`: Manages custom tip percentage input
- `resetCalculator()`: Resets all inputs to default values

### CSS Features
- CSS Grid for tip button layout
- Linear gradients for modern styling
- Smooth animations with keyframes
- Responsive breakpoints for mobile devices
- Focus states for accessibility

## 🎨 Customization

### Changing Currency
To change from FCFA to another currency:
1. Find all instances of `"FCFA"` in the code

### Modifying Tip Percentages
To change the preset tip percentages:
1. Locate the tip buttons in the HTML
2. Update the `data-tip` attributes and button text
3. Adjust the grid layout if adding/removing buttons

### Color Scheme
The app uses a purple gradient theme. To customize:
1. Update the `background` property in the `body` selector
2. Modify the `.results` background gradient
3. Change the `--primary-color` values throughout the CSS

## 🌍 Localization

Currently supports:
- French number formatting (fr-FR locale)
- FCFA currency display
- Can be easily adapted for other currencies and locales




