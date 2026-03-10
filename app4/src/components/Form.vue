<script setup>
defineOptions({ name: 'BookForm' })
const book = defineModel()
const availableGenres = ['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Fantasy', 'Biography']

const emit = defineEmits(['validate'])

const handleButtonClick = () => {
  const isInvalid =
    !book.value.title ||
    !book.value.author ||
    book.value.genres.length === 0 ||
    !book.value.datePublished ||
    !book.value.description

  if (isInvalid) {
    alert('Please fill out all required fields!')
  } else {
    alert('Form is valid and ready to save!')
    emit('validate')
  }
}
</script>

<template>
  <div class="box scroll-box">
    <h3>Edit Book Details</h3>

    <div class="form-box">
      <label>Title</label>
      <input v-model="book.title" type="text" placeholder="Enter title" />
      <span v-if="!book.title" class="required">Required</span>
    </div>

    <div class="form-box">
      <label>Author</label>
      <input v-model="book.author" type="text" placeholder="Enter author" />
      <span v-if="!book.author" class="required">Required</span>
    </div>

    <div class="form-box">
      <label>Genres (Hold Ctrl/Cmd to multi-select)</label>
      <select v-model="book.genres" multiple>
        <option v-for="g in availableGenres" :key="g" :value="g">{{ g }}</option>
      </select>
      <span v-if="book.genres.length === 0" class="required">Required</span>
    </div>

    <div class="form-box">
      <label>Date Published</label>
      <input v-model="book.datePublished" type="date" />
      <span v-if="!book.datePublished" class="required">Required</span>
    </div>

    <div class="form-box">
      <label>Description</label>
      <textarea v-model="book.description" rows="4"></textarea>
      <span v-if="!book.description" class="required">Required</span>
    </div>

    <button class="validate-btn" @click="handleButtonClick">Validate</button>
  </div>
</template>

<style scoped>
.required {
  color: #ff4c4c;
  font-size: 0.75rem;
  margin-top: 4px;
  display: block;
}
.form-box {
  margin-bottom: 20px;
}

label {
  display: block;
  text-transform: uppercase;
  font-size: 10px;
  color: #1999ff;
  margin-bottom: 5px;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  background-color: #2a475e;
  border: 1px solid #000;
  color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
}

.validate-btn {
  background: linear-gradient(to bottom, #75b022 5%, #588a1b 95%);
  border: none;
  border-radius: 2px;
  color: #fff;
  padding: 1px 15px;
  line-height: 30px;
  font-family: inherit;
  font-size: 15px;
  cursor: pointer;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.3);
  width: 100%;
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.validate-btn:hover {
  background: linear-gradient(to bottom, #8ed629 5%, #6aa61e 95%);
}

.validate-btn:active {
  background: #588a1b;
}
</style>
