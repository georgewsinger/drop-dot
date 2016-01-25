goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17533__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17534__i = 0, G__17534__a = new Array(arguments.length -  0);
while (G__17534__i < G__17534__a.length) {G__17534__a[G__17534__i] = arguments[G__17534__i + 0]; ++G__17534__i;}
  args = new cljs.core.IndexedSeq(G__17534__a,0);
} 
return G__17533__delegate.call(this,args);};
G__17533.cljs$lang$maxFixedArity = 0;
G__17533.cljs$lang$applyTo = (function (arglist__17535){
var args = cljs.core.seq(arglist__17535);
return G__17533__delegate(args);
});
G__17533.cljs$core$IFn$_invoke$arity$variadic = G__17533__delegate;
return G__17533;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17536__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17537__i = 0, G__17537__a = new Array(arguments.length -  0);
while (G__17537__i < G__17537__a.length) {G__17537__a[G__17537__i] = arguments[G__17537__i + 0]; ++G__17537__i;}
  args = new cljs.core.IndexedSeq(G__17537__a,0);
} 
return G__17536__delegate.call(this,args);};
G__17536.cljs$lang$maxFixedArity = 0;
G__17536.cljs$lang$applyTo = (function (arglist__17538){
var args = cljs.core.seq(arglist__17538);
return G__17536__delegate(args);
});
G__17536.cljs$core$IFn$_invoke$arity$variadic = G__17536__delegate;
return G__17536;
})()
;

return null;
});
