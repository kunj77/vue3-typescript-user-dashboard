<template>
  <div class="documents-list-container">
    <div class="documents-list-header">
      <h4>Recent Documents</h4>
      <button class="clear">View All Documents</button>
    </div>
    <table>
      <thead>
        <tr>
          <th style="width: 75%;" class="padded">Document Name</th>
          <th style="width: 18%;">Recived On</th>
          <th style="width: 7%;"></th>
        </tr>
        <tr>
          <td colspan="3">
            <hr />
          </td>
        </tr>
      </thead>
      <tbody>
      <template v-for="document in filteredDocuments" :key="document.id">
        <tr>
          <td class="icon-text padded">
            <img alt="Document" src="../../assets/document.png" /> 
            <span>{{ document.document_name }}</span>
          </td>
          <td>{{ formatDate(document.received_on) }}</td>
          <td>
            <button class="row-action">
              <img alt="More Actions" src="../../assets/menu.png" />
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <hr />
          </td>
        </tr>
        </template>
      </tbody>
    </table>
    <div v-if="showPagination">
      <!-- Pagination component or controls go here -->
    </div>
  </div>
</template>

<script lang="ts" src="./DocumentsList.ts"></script>

<style lang="scss" src="./DocumentsList.scss"></style>