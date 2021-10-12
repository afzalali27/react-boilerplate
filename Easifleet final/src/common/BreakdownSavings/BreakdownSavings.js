import React from 'react';
import {
      BreakdownWrappper
  } from './BreakdownSavingsStyled';


  export const BreakdownSavings =({quote})=> {

    return (
        <BreakdownWrappper>
                <tbody>
                <tr>
                    <th>
                    <h2>Results</h2>
                    </th>
                    <th className="npack-w">
                    <h3 >Not Packaged</h3>
                    </th>
                    <th className="pack-w">
                    <h3>Packaged</h3>
                    </th>
                </tr>
                <tr className="">
                    <th class="left"></th>
                    <th class="left">Annually</th>
                    <th class="right">Annually</th>
                    <th class="right">Fortnightly</th>
                </tr>
                <tr className="">
                    <td className="text-left">Annual Salary</td>
                    <td class="left">{parseFloat(quote.salary_gross_per_year ?? 0).toFixed(2) ?? 0.00}</td>
                    <td class="right">{parseFloat(quote.salary_gross_per_year ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.salary_gross_per_pay_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Pre Tax Deduction</td>
                    <td class="left">0.00</td>
                    <td class="right">{parseFloat(quote.pre_tax_deduction_yearly ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.pre_tax_deduction_per_pay_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">FBT Payable</td>
                    <td class="left">{parseFloat(quote.not_packaged_fbt_payable ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.with_ecm_fbt_payable ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.packaged_fbt_payable_pre_tax_per_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Luxury Car Charge</td>
                    <td class="left">0.00</td>
                    <td class="right">{parseFloat(quote.luxury_charge ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.luxury_charge_per_cycle?? 0 ).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Employee Contribution GST</td>
                    <td class="left">{parseFloat(quote.not_packaged_gst_on_ecm ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.with_ecm_gst_on_ecm ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.ecm_gst_per_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Taxable Gross Salary</td>
                    <td class="left">{parseFloat(quote.salary_gross_per_year ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.with_ecm_taxable_salary_gross ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.with_ecm_taxable_salary_gross ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Tax Payable (inc Medicare)</td>
                    <td class="left">{parseFloat(quote.not_packaged_tax_payable ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.with_ecm_tax_payable ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.with_ecm_tax_payable_per_pay_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Vehicle Costs Not Sacrificed</td>
                    <td class="left">{parseFloat(quote.not_packaged_costs_not_sacrificed ?? 0).toFixed(2)}</td>
                    <td class="right">0.00</td>
                    <td class="right">0.00</td>
                </tr> <tr className="">
                    <td className="text-left">Employee Contribution</td>
                    <td class="left">0.00</td>
                    <td class="right">{parseFloat(quote.ecm_gross_per_year ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.ecm_gross_per_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="">
                    <td className="text-left">Net Salary After Costs</td>
                    <td class="left">{parseFloat(quote.not_packaged_net_salary ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.packaged_net_salary_after_ecm ?? 0).toFixed(2)}</td>
                    <td class="right">{parseFloat(quote.packaged_net_salary_per_cycle ?? 0).toFixed(2)}</td>
                </tr>
                <tr className="final">
                    <td className="text-left">After Tax Advantage</td>
                    <td className="left">0.00</td>
                    <td className="right">{parseFloat(quote.advantage_per_year ?? 0).toFixed(2)}</td>
                    <td className="right">{parseFloat(quote.with_ecm_advantage_per_pay_cycle ?? 0).toFixed(2)}</td>
                </tr>
                </tbody>
        </BreakdownWrappper>
    );
  }