<script setup lang="ts">
import { useError } from 'nuxt/app';

const error = useError()
</script>

<template>
    <main class="h-screen flex flex-col items-center justify-center">
        <h1 class="text-red-600 text-6xl">{{error?.statusCode}}</h1>
        <DevOnly>
            <p>{{ error?.cause }}</p>
            <p>{{ error?.data }}</p>
            <p>{{ error?.message }}</p>
        </DevOnly>
    </main>
</template>