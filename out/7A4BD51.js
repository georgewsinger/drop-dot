goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__372502__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__372502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__372503__i = 0, G__372503__a = new Array(arguments.length -  0);
while (G__372503__i < G__372503__a.length) {G__372503__a[G__372503__i] = arguments[G__372503__i + 0]; ++G__372503__i;}
  args = new cljs.core.IndexedSeq(G__372503__a,0);
} 
return G__372502__delegate.call(this,args);};
G__372502.cljs$lang$maxFixedArity = 0;
G__372502.cljs$lang$applyTo = (function (arglist__372504){
var args = cljs.core.seq(arglist__372504);
return G__372502__delegate(args);
});
G__372502.cljs$core$IFn$_invoke$arity$variadic = G__372502__delegate;
return G__372502;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__372505__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__372505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__372506__i = 0, G__372506__a = new Array(arguments.length -  0);
while (G__372506__i < G__372506__a.length) {G__372506__a[G__372506__i] = arguments[G__372506__i + 0]; ++G__372506__i;}
  args = new cljs.core.IndexedSeq(G__372506__a,0);
} 
return G__372505__delegate.call(this,args);};
G__372505.cljs$lang$maxFixedArity = 0;
G__372505.cljs$lang$applyTo = (function (arglist__372507){
var args = cljs.core.seq(arglist__372507);
return G__372505__delegate(args);
});
G__372505.cljs$core$IFn$_invoke$arity$variadic = G__372505__delegate;
return G__372505;
})()
;

return null;
});
