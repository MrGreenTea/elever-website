<script lang="ts">
  import type { Content } from "../contents/types/home.ts";
  type ContactContent = Content["contact"];

  const { content }: { content: ContactContent } = $props();
  const fields: ContactContent["fields"] = $state({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const htmlMessage = $derived(
    `${fields.message}\n${fields.email}\n${fields.phone}`.replaceAll(
      "\n",
      "%0A",
    ),
  );
</script>

<form>
  <div class="grid grid-cols-1 gap-7 lg:grid-cols-2">
    <label class="sr-only" for="name">Name</label>
    <input
      bind:value={fields.name}
      class="ring-gray-300 block rounded-sm border border-purple-light bg-purple-dark px-2 py-3 shadow-sm ring-1 ring-inset placeholder:text-purple-bright lg:p-4"
      id="name"
      type="text"
      placeholder={content.fields.name}
    />

    <label class="sr-only" for="company">Company</label>
    <input
      bind:value={fields.company}
      class="ring-gray-300 block rounded-sm border border-purple-light bg-purple-dark px-2 py-3 shadow-sm ring-1 ring-inset placeholder:text-purple-bright lg:p-4"
      id="company"
      type="text"
      placeholder={content.fields.company}
    />

    <label class="sr-only" for="email">Email</label>
    <input
      bind:value={fields.email}
      class="ring-gray-300 block rounded-sm border border-purple-light bg-purple-dark px-2 py-3 shadow-sm ring-1 ring-inset placeholder:text-purple-bright lg:p-4"
      id="email"
      type="email"
      placeholder={content.fields.email}
    />

    <label class="sr-only" for="phone">Phone</label>
    <input
      bind:value={fields.phone}
      class="ring-gray-300 block rounded-sm border border-purple-light bg-purple-dark px-2 py-3 shadow-sm ring-1 ring-inset placeholder:text-purple-bright lg:p-4"
      id="phone"
      type="text"
      placeholder={content.fields.phone}
    />

    <label class="sr-only" for="message">Message</label>
    <textarea
      bind:value={fields.message}
      rows="3"
      class="ring-gray-300 block rounded-sm border border-purple-light bg-purple-dark px-2 py-3 shadow-sm ring-1 ring-inset placeholder:text-purple-bright lg:col-span-2 lg:p-4"
      id="message"
      placeholder={content.fields.message}
    ></textarea>
  </div>

  <a
    href="mailto:contact@altusforge.com?subject={fields.name} from {fields.company}: Regarding Elever&body={htmlMessage}"
    type="submit"
    class="bg-primary mt-11 inline-flex w-full items-center justify-center gap-x-1.5 rounded-md border border-white bg-grey px-8 py-4 text-sm text-white shadow-sm lg:mt-10 lg:max-w-48"
    >{content.button}</a
  >
</form>
