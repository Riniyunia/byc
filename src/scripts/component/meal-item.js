class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        :host {
            width: 90%;
            max-width: 800px;
            margin: 32px auto;
        }
        
        #mealList {
        margin-top: 16px;
        width: 100%;
        padding: 16px;
        display: block;
        }
        
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        <div id="mealList">
            <div class="col-lg-12 col-md-12 col-sm-12" style="margin-top: 12px;">
            <div class="card">
            <div class="card-body">
        <img class="meal-image" src="${this._meal.strMealThumb}" alt="Fan Art">
        <div class="meal-info"> 
        <h2> ${this._meal.strMeal} </h2>
        <div class="meal_ingredients>
        <ul>
        <li class="ingredients i1"><p>${this._meal.strMeasure1} ${this._meal.strIngredient1}</p></li>
        <li class="ingredients i2"><p>${this._meal.strMeasure2} ${this._meal.strIngredient2}</p></li>
        <li class="ingredients i3"><p>${this._meal.strMeasure3} ${this._meal.strIngredient3}</p></li>
        <li class="ingredients i4"><p>${this._meal.strMeasure4} ${this._meal.strIngredient4}</p></li>
        <li class="ingredients i5"><p>${this._meal.strMeasure5} ${this._meal.strIngredient5}</p></li>
        <li class="ingredients i6"><p>${this._meal.strMeasure6} ${this._meal.strIngredient6}</p></li>
        <li class="ingredients i7"><p>${this._meal.strMeasure7} ${this._meal.strIngredient7}</p></li>
        <li class="ingredients i8"><p>${this._meal.strMeasure8} ${this._meal.strIngredient8}</p></li>
        <li class="ingredients i9"><p>${this._meal.strMeasure9} ${this._meal.strIngredient9}</p></li>
        <li class="ingredients i10"><p>${this._meal.strMeasure10} ${this._meal.strIngredient10}</p></li>
        <li class="ingredients i11"><p>${this._meal.strMeasure11} ${this._meal.strIngredient11}</p></li>
        <li class="ingredients i12"><p>${this._meal.strMeasure12} ${this._meal.strIngredient12}</p></li>
        <li class="ingredients i13"><p>${this._meal.strMeasure13} ${this._meal.strIngredient13}</p></li>
        <li class="ingredients i14"><p>${this._meal.strMeasure14} ${this._meal.strIngredient14}</p></li>
        <li class="ingredients i15"><p>${this._meal.strMeasure15} ${this._meal.strIngredient15}</p></li>
        <li class="ingredients i16"><p>${this._meal.strMeasure16} ${this._meal.strIngredient16}</p></li>
        <li class="ingredients i17"><p>${this._meal.strMeasure17} ${this._meal.strIngredient17}</p></li>
        <li class="ingredients i18"><p>${this._meal.strMeasure18} ${this._meal.strIngredient18}</p></li>
        <li class="ingredients i19"><p>${this._meal.strMeasure19} ${this._meal.strIngredient19}</p></li>
        <li class="ingredients i20"><p>${this._meal.strMeasure20} ${this._meal.strIngredient20}</p></li>
        </ul>
        </div>
        <p> ${this._meal.strInstructions} </p>
        </div>
        </div>
        </div>
        </div>
        </div>`;

    }
}

customElements.define("meal-item", MealItem);