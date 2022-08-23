const menu_email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenuMobile                = document.querySelector('.menu');
const mobileMenu                    = document.querySelector('.mobile-menu');

const shoppingCart                  = document.querySelector('.navbar-shopping-cart');
const productDetail                 = document.querySelector('#shopping-cart-container');
const productDetailContainer        = document.querySelector('#product-detail');
const cardsContainer                = document.querySelector('.cards-container');
const ProductDetailcloseIcon        = document.querySelector('.product-detail-close');

menu_email.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);
ProductDetailcloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu ()
{
    const isProductDetail           = !productDetail.classList.contains('inactive');
    const isProductDetailContainer  = !productDetailContainer.classList.contains('inactive');
   
    if (isProductDetail)
    {
        productDetail.classList.add('inactive');
    }

    if (isProductDetailContainer)
    {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    const isProductDetail  = !productDetail.classList.contains('inactive');
    const isProductDetailContainer  = !productDetailContainer.classList.contains('inactive');
   

    if (isProductDetail)
    {
        productDetail.classList.add('inactive');
    }

    if (isProductDetailContainer)
    {
        productDetailContainer.classList.add('inactive');
    }
    

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail()
{
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen  = !mobileMenu.classList.contains('inactive');
    const isProductDetailContainer  = !productDetailContainer.classList.contains('inactive');

    if (isDesktopMenuOpen)
    {
        desktopMenu.classList.add('inactive');
    }

    if (isMobileMenuOpen)
    {
        mobileMenu.classList.add('inactive');
    }
    
    if (isProductDetailContainer)
    {
        productDetailContainer.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

function openProductDetail()
{
    const isProductDetail  = !productDetail.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isProductDetail)
    {
        productDetail.classList.add('inactive');
    }

    if (isDesktopMenuOpen)
    {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail()
{
    productDetailContainer.classList.add('inactive');
}
const productList = [];

productList.push(
{
    name:'bike',
    price: 23,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push(
    {
        name:'Pc',
        price: 250,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
    });

productList.push(
{
    name:'bike',
    price: 23,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push(
    {
        name:'bike',
        price: 23,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
    });

productList.push(
    {
        name:'Pc',
        price: 250,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    
    });

for (product of productList)
{
   const productCard =  document.createElement('div');
   productCard.classList.add('product-card');

   const img = document.createElement('img');
   img.setAttribute('src', product.image);
   img.addEventListener('click', openProductDetail)
   
   const productinfo =  document.createElement('div');
   productinfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');
   
   const productPrice = document.createElement('p');
   productPrice.innerText = `$ ${product.price}`;
  
   const productName = document.createElement('p');
   productName.innerText = product.name;
   
   const productInfoFigure = document.createElement('figure');
   
   const productInfoFigureImg = document.createElement('img');
   productInfoFigureImg.setAttribute('src', '/icons/bt_add_to_cart.svg');
   
   productInfoFigure.appendChild(productInfoFigureImg);
   productinfo.appendChild(productInfoFigure);
   productinfo.appendChild(productInfoFigure);
   productInfoDiv.appendChild(productName);
   productInfoDiv.appendChild(productPrice);
   productinfo.appendChild(productInfoDiv);
   productCard.appendChild(img);
   productCard.appendChild(productinfo);

   cardsContainer.appendChild(productCard);

}

