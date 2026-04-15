
document.addEventListener('DOMContentLoaded', () => {
    const categoryMenuData = [
        {
            name: "Health Care",
            icon: "icon-shopping-bags",
            href: "product.html",
            columns: [
                {
                    title: "Health Care",
                    items: [
                        { name: "Vitamins & Supplements", href: "product.html" },
                        { name: "Personal Care", href: "product.html" },
                        { name: "Sexual Wellness", href: "product.html" },
                        { name: "Health Devices", href: "product.html" },
                    ]
                },
                // {
                //     title: "Surgical Product",
                //     items: [
                //         { name: "Masks & Gloves", href: "product.html" },
                //         { name: "Surgical Instruments", href: "product.html" },
                //         { name: "Hospital Equipment", href: "product.html" },
                //         { name: "Orthopedic Support", href: "product.html" },
                //         { name: "Wheelchairs", href: "product.html" }
                //     ]
                // },
                // {
                //     title: "Medical Devices",
                //     items: [
                //         { name: "BP Monitors", href: "product.html" },
                //         { name: "Thermometers", href: "product.html" },
                //         { name: "Nebulizers", href: "product.html" },
                //         { name: "Pulse Oximeters", href: "product.html" },
                //         { name: "Glucometers", href: "product.html" }
                //     ]
                // }
            ]
        },
        {
            name: "First Aid",
            icon: "icon-options",
            href: "product.html",
            columns: [
                {
                    title: "First Aid Kits",
                    items: [
                        { name: "Home Kits", href: "product.html" },
                        { name: "Travel Kits", href: "product.html" },
                        { name: "Car Kits", href: "product.html" },
                        { name: "Sports Kits", href: "product.html" },
                        { name: "Office Kits", href: "product.html" }
                    ]
                }
            ]
        },
        {
            name: "Surgical Product",
            icon: "icon-award",
            href: "product.html",
            columns: [
                {
                    title: "Equipments",
                    items: [
                        { name: "Scissors", href: "product.html" },
                        { name: "Forceps", href: "product.html" },
                        { name: "Scalpels", href: "product.html" },
                        { name: "Retractors", href: "product.html" },
                        { name: "Clamps", href: "product.html" }
                    ]
                }
            ]
        },
        {
            name: "Diagnostic Product",
            icon: "icon-user",
            href: "product.html",
            columns: [
                {
                    title: "Tests",
                    items: [
                        { name: "Pregnancy Tests", href: "product.html" },
                        { name: "Ovulation Tests", href: "product.html" },
                        { name: "Covid Tests", href: "product.html" },
                        { name: "Drug Tests", href: "product.html" },
                        { name: "Allergy Tests", href: "product.html" }
                    ]
                }
            ]
        },
        {
            name: "Dry Nuts",
            icon: "icon-options",
            href: "product.html",
            columns: [
                {
                    title: "Nuts",
                    items: [
                        { name: "Almonds", href: "product.html" },
                        { name: "Cashews", href: "product.html" },
                        { name: "Walnuts", href: "product.html" },
                        { name: "Pistachios", href: "product.html" },
                        { name: "Raisins", href: "product.html" }
                    ]
                }
            ]
        }
    ];

    const menuContainer = document.querySelector('.ltn__category-menu-toggle ul');
    if (!menuContainer) return;

    // Clear existing content
    menuContainer.innerHTML = '';

    categoryMenuData.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('ltn__category-menu-item');
        
        // Add drop down class if it has columns
        if (category.columns && category.columns.length > 0) {
            li.classList.add('ltn__category-menu-drop');
        }

        const a = document.createElement('a');
        a.href = category.href;
        a.innerHTML = `<i class="${category.icon}"></i>${category.name}`;
        li.appendChild(a);

        if (category.columns && category.columns.length > 0) {
            const ulSub = document.createElement('ul');
            ulSub.classList.add('ltn__category-submenu');
            
            // Determine column class based on number of columns
            // Although specific classes like ltn__category-column-5 existed, 
            // the CSS likely handles flow or we can stick to a generic structure that works.
            // Let's deduce strictly from the array length if we want to add specific classes.
            if (category.columns.length >= 5) ulSub.classList.add('ltn__category-column-5');
            else if (category.columns.length === 4) ulSub.classList.add('ltn__category-column-4');
            else if (category.columns.length === 3) ulSub.classList.add('ltn__category-column-3');
            else if (category.columns.length === 2) ulSub.classList.add('ltn__category-column-2');

            category.columns.forEach(col => {
                const liCol = document.createElement('li');
                liCol.classList.add('ltn__category-submenu-title', 'ltn__category-menu-drop');
                
                const aTitle = document.createElement('a');
                aTitle.href = category.href; // Linking title to parent category href as well
                aTitle.textContent = col.title;
                liCol.appendChild(aTitle);

                if (col.items && col.items.length > 0) {
                    const ulItems = document.createElement('ul');
                    ulItems.classList.add('ltn__category-submenu-children');
                    
                    col.items.forEach(item => {
                        const liItem = document.createElement('li');
                        const aItem = document.createElement('a');
                        aItem.href = item.href;
                        aItem.textContent = item.name;
                        liItem.appendChild(aItem);
                        ulItems.appendChild(liItem);
                    });
                    
                    liCol.appendChild(ulItems);
                }
                
                ulSub.appendChild(liCol);
            });

            li.appendChild(ulSub);
        }

        menuContainer.appendChild(li);
    });
    
    // Add the "More Categories" item if needed, strictly recreating what was there or better
    // The original had a specific item for submenus, but this dynamic generation covers it.
});
