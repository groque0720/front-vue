<template>
  <Card class="w-7/12 min-w-[400px]">
    <CardHeader>
      <CardTitle>
        <img class="m-auto w-[300px]" src="/src/assets/images/logo-dyv.6982403.png" alt="" />
      </CardTitle>
      <CardDescription class="text-center mt-3">Sistema Gestión Concesionario</CardDescription>
    </CardHeader>
    <form @submit.prevent="onLogin">
      <CardContent>
        <div class="flex flex-col gap-3">
          <CustomInput
            label="Email"
            v-model="email"
            type="email"
            placeholder="Email"
            :error="errors.email"
            v-bind="emailAttrs"
          />
          <CustomInput
            label="Password"
            v-model="password"
            type="password"
            placeholder="password"
            :error="errors.password"
            v-bind="passwordAttrs"
          />
        </div>

        <div class="flex items-center space-x-2 my-2">
          <Checkbox
            id="terms"
            :defaultChecked="recuerdame == true ? true : false"
            :checked="recuerdame"
            @update:checked="recuerdame = !recuerdame"
          />
          <label for="terms">Recordar usuario</label>
        </div>
      </CardContent>

      <CardFooter class="flex justify-end">
        <Button type="submit" :disabled="isPending">Acceder</Button>
      </CardFooter>
    </form>
  </Card>
</template>

<script lang="ts" src="./LoginView.ts"></script>
