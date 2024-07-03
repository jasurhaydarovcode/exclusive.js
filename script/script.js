let root = document.querySelector('#root')

// Style Connected
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../css/styles.css';
link.media = 'all';
document.getElementsByTagName('head')[0].appendChild(link);


root.innerHTML = `
    <nav class="navbar">
        <div class="logo">
            <h1>Exclusive</h1>
        </div>

        <div>
            <ul class="list">
                <a href="#" class="listFirst"><li>Home</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Sign Up</li></a>
            </ul>
        </div>

        <div class="three-div">
            <div class="input-item">
                <input type="text" placeholder="What are you looking for?"> 
                <img src="/images/navbar/Component 2.svg">
            </div>
            <div class="cruid">
                <img src="../images/navbar/Wishlist.svg">
                <img src="../images/navbar/Cart1 with buy.svg">
            </div>
        </div>
    </nav>
    <hr>

    <header>
        <div class="left-hero">
            <div class="tags">
                <p>Woman’s Fashion</p>
                <img src="../images/header/DropDown.svg">
            </div>
            <div class="tags">
                <p>Men’s Fashion</p>
                <img src="../images/header/DropDown.svg">
            </div>
            <div class="tags">
                <p>Electronics</p>
            </div>
            <div class="tags">
                <p>Home & Lifestyle</p>
            </div>
            <div class="tags">
                <p>Medicine</p>
            </div>
            <div class="tags">
                <p>Sports & Outdoor</p>
            </div>
            <div class="tags">
                <p>Baby’s & Toys</p>
            </div>
            <div class="tags">
                <p>Groceries & Pets</p>
            </div>
            <div class="tags">
                <p>Groceries & Pets</p>
            </div>
        </div>

        <div class="right-hero">
            <img src="../images/header/Frame 560.png">
        </div>
    </header>
`