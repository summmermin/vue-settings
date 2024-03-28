<script setup lang="ts"></script>

<template>
  <div class="pricing-table">
    <h2>Shared Hosting Plans</h2>
    <div class="price-item">
      <ul>
        <li class="plan">Personal</li>
        <li class="price">
          <p>$2.99<small>/mo</small></p>
          <span class="price-doller">$5.99</span>
          <span class="discount">Save 50%</span>
        </li>
        <li class="btn">
          <button>Get Started</button>
        </li>
        <li class="list">30 GB SSD</li>
        <li class="list">1 Website</li>
        <li class="list">Domaine Name</li>
      </ul>
    </div>
    <div class="price-item">
      <ul>
        <li class="plan plus">Business+</li>
        <li class="price">
          <p>$8.99<small>/mo</small></p>
          <span class="price-doller">$17.99</span>
          <span class="discount plus">Save 50%</span>
        </li>
        <li class="btn">
          <button class="plus">Get Started</button>
        </li>
        <li class="list">60 GB SSD</li>
        <li class="list">Unlimited Websites</li>
        <li class="list">Domaine Name</li>
        <li class="list">AutoBackup</li>
      </ul>
    </div>
    <div class="price-item">
      <ul>
        <li class="plan">Business</li>
        <li class="price">
          <p>$4.99<small>/mo</small></p>
          <span class="price-doller">$9.99</span>
          <span class="discount">Save 50%</span>
        </li>
        <li class="btn">
          <button>Get Started</button>
        </li>
        <li class="list">90 GB SSD</li>
        <li class="list">Unlimited Websites</li>
        <li class="list">Domaine Name</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-table {
  width: 80%;
  text-align: center;
  overflow: hidden;
  margin-left: 10%;
  margin-right: 10%;
}

.pricing-table h2 {
  color: #6d6e70;
  font-size: 40px;
  margin-bottom: 5%;
  margin-top: 5%;
}

.pricing-table .price-item {
  background: #fff;
  float: left;
  width: 32%;
  border-radius: 10px;
}

.pricing-table .price-item:nth-of-type(1),
.pricing-table .price-item:nth-of-type(3) {
  margin-top: 3%;
}

.pricing-table .price-item:nth-of-type(2),
.pricing-table .price-item:nth-of-type(3) {
  margin-left: 1%;
}

.pricing-table .price-item ul {
  list-style: none;
  transition: all 0.5s ease-in-out;
}

.pricing-table .price-item ul:hover {
  margin-top: -10px;
}

.pricing-table .price-item ul li.plan {
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #007bff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.pricing-table .price-item ul li.plus {
  background: #dc3545;
  color: #fff;
}

.pricing-table .price-item ul li.price {
  padding: 15px;
}

.pricing-table .price-item ul li.price p {
  font-weight: bold;
  font-size: 35px;
  color: #414141;
}

.pricing-table .price-item ul li.price p small {
  font-size: 18px;
  color: #6d6e70;
  font-weight: normal;
}

.pricing-table .price-item ul li.price span {
  display: block;
}

.pricing-table .price-item ul li.price .price-doller {
  color: #6d6e70;
  margin-top: 7%;
  font-weight: bold;
  text-decoration: line-through;
}

.pricing-table .price-item ul li.price .discount {
  color: #007bff;
  margin-top: 7%;
}

.pricing-table .price-item ul li.price .plus {
  color: #dc3545;
}

.pricing-table .price-item ul li.btn {
  margin: 24px 0;
}

.pricing-table .price-item ul li.btn button {
  padding: 10px 32px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #007bff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.pricing-table .price-item ul li.btn button:hover {
  background: #1169d9;
}

.pricing-table .price-item ul li.btn button.plus {
  background: #dc3545;
}

.pricing-table .price-item ul li.btn button.plus:hover {
  background: #c82233;
}

.pricing-table .price-item ul li.list {
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
  font-weight: bold;
}

.pricing-table .price-item ul li.list:last-of-type {
  border-bottom: none;
}

ul {
  padding: 0;
}
</style>
