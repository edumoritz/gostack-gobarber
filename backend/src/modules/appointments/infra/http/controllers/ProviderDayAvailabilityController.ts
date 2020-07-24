import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;
  
    const listProviders = container.resolve(ListProviderDayAvailabilityService);
  
    const availability = await listProviders.execute({
      provider_id, 
      day,
      month, 
      year,
    });
  
    return response.json(availability);
  }
}