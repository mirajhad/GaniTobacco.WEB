//Prod

const ApiEndpoint = 'https://netflix-backend-seven.vercel.app/api/v1/users/';


export const AppSettings = {
  Urls: {
    Auth: {
      loginUrl: ApiEndpoint + 'login',
      forgotPassword: ApiEndpoint + 'forgotpassword',
      RegisterUser: ApiEndpoint+'register'
    },
    Common: {
      // getMenu: ApiEndpoint + 'getMenu',
    },
    Master: {
      
    },
    Movement: {
      movementPost: ApiEndpoint + 'movementrecord',
      movementPostOffline: ApiEndpoint + 'movementrecordoffline',
      movementRecord: ApiEndpoint + 'movementrecordheader',
      movementRecordsById: ApiEndpoint + 'movementrecords',
      deleteMovementRecord: ApiEndpoint + 'empmovementheader/',
      deleteViewMovementRecord: ApiEndpoint + 'movementrecords/',
      movementRecordSelf: ApiEndpoint + 'EmpMovementHeader/',
      bmPendingList: ApiEndpoint + 'bmpendinglist',
      bmPendingListBasedOnStatus: ApiEndpoint + 'bmpendinglist',
      approval: ApiEndpoint + 'approval/',
      checkInOut: ApiEndpoint + 'checkinoutuser',
      accept: ApiEndpoint + 'approvalstatus',
      movementStatus: ApiEndpoint + 'movementstatus/',
      myAction: ApiEndpoint + 'myaction/',
      myActionBasedOnWeek: ApiEndpoint + 'myaction/',
      myActionHoa: ApiEndpoint + 'myactionhoa',
      deletedRecords: ApiEndpoint + 'rejected',
      deletedRecordsBasedOnWeek: ApiEndpoint + 'rejected/',
      deleteRecord: ApiEndpoint + 'movementrecords/',
      bulkApproval: ApiEndpoint + 'bulkapprovalstatus',
      failedRecords: ApiEndpoint + 'failedrecord',
      revoke: ApiEndpoint + 'revoke'

    },
    EmployeeDetails: {
      addEmployeePost: ApiEndpoint + 'employee',
      addEmployee: ApiEndpoint + 'addEmployee',
      getEmployee: ApiEndpoint + 'employee',
      getEmployeeBasedOnStatus: ApiEndpoint + 'employee',
      itemBlock: ApiEndpoint + 'blockuser/',
      checkValidate: ApiEndpoint + 'validatescreen',
      uploadEmployeeFromHr: ApiEndpoint + 'empupload',
      empUploadValidate: ApiEndpoint + 'empuploadvalidate',
      empUploadProcess: ApiEndpoint + 'empuploadprocess',
      empUploadClear: ApiEndpoint + 'empuploadclear',
      getBlockEmployee: ApiEndpoint + 'getemployee/',
      kmBmDetails: ApiEndpoint + 'kmbmDetails/',
      employeeName: ApiEndpoint + 'employeeone/',
      getOdometerReading: ApiEndpoint + 'odometer',
      hrEmployees: ApiEndpoint + 'hremployees',
      resetPassword: ApiEndpoint + 'resetpassword',
    },
    Ids: {
      approveId: '137882cabaf911ebbbeaf3b4eb99cd01'
    },
    Template: {
      getTemplate: ApiEndpoint + 'template',
      addTemplate: ApiEndpoint + 'template',
      updateTemplate: ApiEndpoint + 'template/',
      deleteTemplate: ApiEndpoint + 'template/',
      getTemplateById: ApiEndpoint + 'template/',
      getUserTemplatesById: ApiEndpoint + 'templatebyemp/',
      tempOffline: ApiEndpoint + 'templateoffline'
    },
  }
}