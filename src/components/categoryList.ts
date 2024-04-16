import { CategoryType } from '../types/CategoryType';

export function categoryItem(category: CategoryType) {
  return `<div class="accordion-item">
    <h2 class="accordion-header" id="heading-${category.id}">
    <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse-${category.id}"
        aria-expanded="false"
        aria-controls="collapse-${category.id}">
        ${category.name}
    </button>
    </h2>
        <div
        id="collapse-${category.id}"
        class="accordion-collapse collapse"
        aria-labelledby="heading-${category.id}"
        data-bs-parent="#fullList">
        <div class="accordion-body p-1 category" id="${category.name}">
        </div>
    </div>
</div>`;
}
