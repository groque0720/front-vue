/* eslint-disable vue/no-reserved-component-names */
import { defineComponent, ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from 'vue-toastification';
import CustomInput from '@/modules/common/components/CustomInput.vue';
// import { useQuery } from '@tanstack/vue-query';
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from 'vue-router';

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  recuerdame: yup.boolean(),
});

const initialValues = {
  email: localStorage.getItem('email') || '',
  password: '',
  recuerdame: localStorage.getItem('recuerdame') == 'true' ? true : false,
};

export default defineComponent({
  components: {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CustomInput,
    Button,
    Checkbox,
  },

  setup() {
    const { defineField, values, errors, meta, handleSubmit } = useForm({
      validationSchema,
      initialValues,
    });
    const [email, emailAttrs] = defineField('email');
    const [password, passwordAttrs] = defineField('password');
    const [recuerdame, recuerdameAttrs] = defineField('recuerdame');
    const authStore = useAuthStore();
    const toast = useToast();
    const router = useRouter();
    const isPending = ref(false);

    const onLogin = handleSubmit(async (value) => {
      isPending.value = true;
      if (value.recuerdame) {
        localStorage.setItem('email', value.email);
        localStorage.setItem('recuerdame', value.recuerdame + '');
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('recuerdame');
      }

      const resp = await authStore.login(value.email, value.password);

      isPending.value = false;

      if (resp === true) {
        toast.success('Bienvenido');
        router.replace({ name: localStorage.getItem('lastPath') || 'dashboard' });
        return;
      } else {
        toast.error('Las credenciales son incorrectas');
        return;
      }
    });

    return {
      email,
      emailAttrs,
      password,
      passwordAttrs,
      recuerdame,
      recuerdameAttrs,
      values,
      errors,
      meta,
      onLogin,
      validationSchema,
      initialValues,
      isPending,
    };
  },
});
