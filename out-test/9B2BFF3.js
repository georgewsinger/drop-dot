goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53265__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53265 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53266__i = 0, G__53266__a = new Array(arguments.length -  0);
while (G__53266__i < G__53266__a.length) {G__53266__a[G__53266__i] = arguments[G__53266__i + 0]; ++G__53266__i;}
  args = new cljs.core.IndexedSeq(G__53266__a,0);
} 
return G__53265__delegate.call(this,args);};
G__53265.cljs$lang$maxFixedArity = 0;
G__53265.cljs$lang$applyTo = (function (arglist__53267){
var args = cljs.core.seq(arglist__53267);
return G__53265__delegate(args);
});
G__53265.cljs$core$IFn$_invoke$arity$variadic = G__53265__delegate;
return G__53265;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53268__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53269__i = 0, G__53269__a = new Array(arguments.length -  0);
while (G__53269__i < G__53269__a.length) {G__53269__a[G__53269__i] = arguments[G__53269__i + 0]; ++G__53269__i;}
  args = new cljs.core.IndexedSeq(G__53269__a,0);
} 
return G__53268__delegate.call(this,args);};
G__53268.cljs$lang$maxFixedArity = 0;
G__53268.cljs$lang$applyTo = (function (arglist__53270){
var args = cljs.core.seq(arglist__53270);
return G__53268__delegate(args);
});
G__53268.cljs$core$IFn$_invoke$arity$variadic = G__53268__delegate;
return G__53268;
})()
;

return null;
});
