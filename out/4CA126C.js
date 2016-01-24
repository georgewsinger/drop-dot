goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40493__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40494__i = 0, G__40494__a = new Array(arguments.length -  0);
while (G__40494__i < G__40494__a.length) {G__40494__a[G__40494__i] = arguments[G__40494__i + 0]; ++G__40494__i;}
  args = new cljs.core.IndexedSeq(G__40494__a,0);
} 
return G__40493__delegate.call(this,args);};
G__40493.cljs$lang$maxFixedArity = 0;
G__40493.cljs$lang$applyTo = (function (arglist__40495){
var args = cljs.core.seq(arglist__40495);
return G__40493__delegate(args);
});
G__40493.cljs$core$IFn$_invoke$arity$variadic = G__40493__delegate;
return G__40493;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40496__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40497__i = 0, G__40497__a = new Array(arguments.length -  0);
while (G__40497__i < G__40497__a.length) {G__40497__a[G__40497__i] = arguments[G__40497__i + 0]; ++G__40497__i;}
  args = new cljs.core.IndexedSeq(G__40497__a,0);
} 
return G__40496__delegate.call(this,args);};
G__40496.cljs$lang$maxFixedArity = 0;
G__40496.cljs$lang$applyTo = (function (arglist__40498){
var args = cljs.core.seq(arglist__40498);
return G__40496__delegate(args);
});
G__40496.cljs$core$IFn$_invoke$arity$variadic = G__40496__delegate;
return G__40496;
})()
;

return null;
});
