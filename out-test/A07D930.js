goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28946__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28947__i = 0, G__28947__a = new Array(arguments.length -  0);
while (G__28947__i < G__28947__a.length) {G__28947__a[G__28947__i] = arguments[G__28947__i + 0]; ++G__28947__i;}
  args = new cljs.core.IndexedSeq(G__28947__a,0);
} 
return G__28946__delegate.call(this,args);};
G__28946.cljs$lang$maxFixedArity = 0;
G__28946.cljs$lang$applyTo = (function (arglist__28948){
var args = cljs.core.seq(arglist__28948);
return G__28946__delegate(args);
});
G__28946.cljs$core$IFn$_invoke$arity$variadic = G__28946__delegate;
return G__28946;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28949__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28950__i = 0, G__28950__a = new Array(arguments.length -  0);
while (G__28950__i < G__28950__a.length) {G__28950__a[G__28950__i] = arguments[G__28950__i + 0]; ++G__28950__i;}
  args = new cljs.core.IndexedSeq(G__28950__a,0);
} 
return G__28949__delegate.call(this,args);};
G__28949.cljs$lang$maxFixedArity = 0;
G__28949.cljs$lang$applyTo = (function (arglist__28951){
var args = cljs.core.seq(arglist__28951);
return G__28949__delegate(args);
});
G__28949.cljs$core$IFn$_invoke$arity$variadic = G__28949__delegate;
return G__28949;
})()
;

return null;
});
