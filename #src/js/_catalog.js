function catalogFilter() {
   const filterBtns = document.querySelectorAll('.filter-buttons');
   const catalogItems = document.querySelectorAll('.catalog-item');

   function filter(category, items) {
      items.forEach((item) => {
         const isItemFiltered = !item.classList.contains(category);
         const isShowAll = category.toLowerCase() === 'oil-all';
         if (isItemFiltered && !isShowAll) {
            item.classList.add('catalog-item--hideAnime');
         } else {
            item.classList.remove('catalog-item--hide');
            item.classList.remove('catalog-item--hideAnime');
         }
      });
   }

   filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
         const currentCategory = btn.dataset.filter;
         filter(currentCategory, catalogItems);
      });
   });

   // catalogItems.forEach((card) => {
   //    card.ontransitionend = function () {
   //       if (card.classList.contains('catalog-item--hideAnime')) {
   //          card.classList.add('catalog-item--hide');
   //       }
   //    };
   // });
}

catalogFilter();