<script setup>
defineOptions({
  name: "bookPreview"
});

const book = defineModel();

defineProps({
  showChecks: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
    <div class="box scroll-box preview-container">
        <h3>Book Preview</h3>
        
        <div class="preview-box">
            <strong>Title:</strong> {{ book.title }} 
            <span v-if="showChecks && book.title" class="check">✔</span>
        </div>

        <div class="preview-box">
            <strong>Author:</strong> {{ book.author }} 
            <span v-if="showChecks && book.author" class="check">✔</span>
        </div>

        <div class="preview-box">
            <strong>Genres:</strong> {{ book.genres?.join(', ') }} 
            <span v-if="showChecks && book.genres?.length > 0" class="check">✔</span>
        </div>

        <div class="preview-box">
            <strong>Published:</strong> {{ book.datePublished }} 
            <span v-if="showChecks && book.datePublished" class="check">✔</span>
        </div>

        <div class="preview-box">
            <strong>Description:</strong>
            <p>{{ book.description }}</p>
            <span v-if="showChecks && book.description" class="check">✔</span>
        </div>
    </div>
</template>

<style scoped>
.preview-container { 
  background: linear-gradient(to bottom, #1b2838 0%, #171a21 100%); 
}



.preview-box { 
  margin-bottom: 15px; 
  font-size: 13px;
  color: #acb2b8;
}

strong { color: #fff; font-weight: normal; margin-right: 5px; }

.check { 
  color: #a3cf06;
  background: rgba(163, 207, 6, 0.1);
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 10px;
}

p { 
  line-height: 1.5; 
  color: #c7d5e0; 
  background: rgba(0,0,0,0.3); 
  padding: 10px;
  border-radius: 3px;
}
</style>