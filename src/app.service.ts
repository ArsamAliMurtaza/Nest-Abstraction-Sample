import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class InspectionProduction {
  abstract inspectionToday();

  inspectDaily() {
    console.log('Go to production area');
    console.log('Check the fuel gauge');
    console.log('Reset the operating conditions');
    console.log('Come to the main reporting bay');
  }
}

@Injectable()
export class InspectionPrinting extends InspectionProduction {
  inspectionToday() {
    console.log('Inspect the working of all printers in the bay');
  }
}

@Injectable()
export class InspectionCutting extends InspectionProduction {
  inspectionToday() {
    console.log(
      'Check if the cutters are working appropriately in the cutting bay',
    );
  }
}

@Injectable()
export class AppService {
  constructor(
    private readonly printing: InspectionPrinting,
    private readonly cutting: InspectionCutting,
  ) {}

  getChecklist() {
    this.printing.inspectionToday();
    this.cutting.inspectionToday();
  }
}
