goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23512__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23513__i = 0, G__23513__a = new Array(arguments.length -  0);
while (G__23513__i < G__23513__a.length) {G__23513__a[G__23513__i] = arguments[G__23513__i + 0]; ++G__23513__i;}
  args = new cljs.core.IndexedSeq(G__23513__a,0);
} 
return G__23512__delegate.call(this,args);};
G__23512.cljs$lang$maxFixedArity = 0;
G__23512.cljs$lang$applyTo = (function (arglist__23514){
var args = cljs.core.seq(arglist__23514);
return G__23512__delegate(args);
});
G__23512.cljs$core$IFn$_invoke$arity$variadic = G__23512__delegate;
return G__23512;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23515__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23516__i = 0, G__23516__a = new Array(arguments.length -  0);
while (G__23516__i < G__23516__a.length) {G__23516__a[G__23516__i] = arguments[G__23516__i + 0]; ++G__23516__i;}
  args = new cljs.core.IndexedSeq(G__23516__a,0);
} 
return G__23515__delegate.call(this,args);};
G__23515.cljs$lang$maxFixedArity = 0;
G__23515.cljs$lang$applyTo = (function (arglist__23517){
var args = cljs.core.seq(arglist__23517);
return G__23515__delegate(args);
});
G__23515.cljs$core$IFn$_invoke$arity$variadic = G__23515__delegate;
return G__23515;
})()
;

return null;
});
