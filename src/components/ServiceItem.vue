<script setup>
    import { formatCurrency } from '../helpers';
    import { useAppointments } from '@/stores/appointments';
    
    const appointments = useAppointments()
    defineProps({
        service: {
            type: Object
        }
    })
</script>

<template>
    <div
    class="p-5 space-y-5 rounded-lg cursor-pointe"
    :class="appointments.isServiceSelected(service._id) ? 'bg-blue-500 text-white' : 'bg-white'"
    @click="appointments.onServiceSelected(service)"
    >
        <p text-2xl font-light>{{ service.name }}</p>

        <p class="text-4xl font-black"
        :class="appointments.isServiceSelected(service._id) ? 'text-white' : 'text-blue-600'"
        >
        {{ formatCurrency(service.price) }}</p>
       
    </div>
</template>