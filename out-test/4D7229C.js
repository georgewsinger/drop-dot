goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47424__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47425__i = 0, G__47425__a = new Array(arguments.length -  0);
while (G__47425__i < G__47425__a.length) {G__47425__a[G__47425__i] = arguments[G__47425__i + 0]; ++G__47425__i;}
  args = new cljs.core.IndexedSeq(G__47425__a,0);
} 
return G__47424__delegate.call(this,args);};
G__47424.cljs$lang$maxFixedArity = 0;
G__47424.cljs$lang$applyTo = (function (arglist__47426){
var args = cljs.core.seq(arglist__47426);
return G__47424__delegate(args);
});
G__47424.cljs$core$IFn$_invoke$arity$variadic = G__47424__delegate;
return G__47424;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47427__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47428__i = 0, G__47428__a = new Array(arguments.length -  0);
while (G__47428__i < G__47428__a.length) {G__47428__a[G__47428__i] = arguments[G__47428__i + 0]; ++G__47428__i;}
  args = new cljs.core.IndexedSeq(G__47428__a,0);
} 
return G__47427__delegate.call(this,args);};
G__47427.cljs$lang$maxFixedArity = 0;
G__47427.cljs$lang$applyTo = (function (arglist__47429){
var args = cljs.core.seq(arglist__47429);
return G__47427__delegate(args);
});
G__47427.cljs$core$IFn$_invoke$arity$variadic = G__47427__delegate;
return G__47427;
})()
;

return null;
});
