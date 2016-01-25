goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25543__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25544__i = 0, G__25544__a = new Array(arguments.length -  0);
while (G__25544__i < G__25544__a.length) {G__25544__a[G__25544__i] = arguments[G__25544__i + 0]; ++G__25544__i;}
  args = new cljs.core.IndexedSeq(G__25544__a,0);
} 
return G__25543__delegate.call(this,args);};
G__25543.cljs$lang$maxFixedArity = 0;
G__25543.cljs$lang$applyTo = (function (arglist__25545){
var args = cljs.core.seq(arglist__25545);
return G__25543__delegate(args);
});
G__25543.cljs$core$IFn$_invoke$arity$variadic = G__25543__delegate;
return G__25543;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25546__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25547__i = 0, G__25547__a = new Array(arguments.length -  0);
while (G__25547__i < G__25547__a.length) {G__25547__a[G__25547__i] = arguments[G__25547__i + 0]; ++G__25547__i;}
  args = new cljs.core.IndexedSeq(G__25547__a,0);
} 
return G__25546__delegate.call(this,args);};
G__25546.cljs$lang$maxFixedArity = 0;
G__25546.cljs$lang$applyTo = (function (arglist__25548){
var args = cljs.core.seq(arglist__25548);
return G__25546__delegate(args);
});
G__25546.cljs$core$IFn$_invoke$arity$variadic = G__25546__delegate;
return G__25546;
})()
;

return null;
});
