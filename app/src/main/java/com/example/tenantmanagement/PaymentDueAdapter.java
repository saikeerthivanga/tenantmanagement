package com.example.tenantmanagement;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class PaymentDueAdapter  extends RecyclerView.Adapter<PaymentDueAdapter.MyViewHolder> {

    private List<Payment_DueActivity.Payment> paymentduelist;

    public class MyViewHolder extends RecyclerView.ViewHolder {
        public TextView paymentdue,propertyName;

        public MyViewHolder(View view) {
            super(view);
            paymentdue = (TextView) view.findViewById(R.id.tvdue);
            propertyName = (TextView) view.findViewById(R.id.tvproprtyName);
        }
    }


    public PaymentDueAdapter(List<Payment_DueActivity.Payment> paymentduelist) {
        this.paymentduelist = paymentduelist;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.paymentdue_listitem, parent, false);

        return new MyViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        Payment_DueActivity.Payment movie = paymentduelist.get(position);
        holder.paymentdue.setText(movie.dueamount);
        holder.propertyName.setText(movie.propertyname);
    }

    @Override
    public int getItemCount() {
        return paymentduelist.size();
    }}