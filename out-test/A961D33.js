goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44561__i = 0, G__44561__a = new Array(arguments.length -  0);
while (G__44561__i < G__44561__a.length) {G__44561__a[G__44561__i] = arguments[G__44561__i + 0]; ++G__44561__i;}
  args = new cljs.core.IndexedSeq(G__44561__a,0);
} 
return G__44560__delegate.call(this,args);};
G__44560.cljs$lang$maxFixedArity = 0;
G__44560.cljs$lang$applyTo = (function (arglist__44562){
var args = cljs.core.seq(arglist__44562);
return G__44560__delegate(args);
});
G__44560.cljs$core$IFn$_invoke$arity$variadic = G__44560__delegate;
return G__44560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44564__i = 0, G__44564__a = new Array(arguments.length -  0);
while (G__44564__i < G__44564__a.length) {G__44564__a[G__44564__i] = arguments[G__44564__i + 0]; ++G__44564__i;}
  args = new cljs.core.IndexedSeq(G__44564__a,0);
} 
return G__44563__delegate.call(this,args);};
G__44563.cljs$lang$maxFixedArity = 0;
G__44563.cljs$lang$applyTo = (function (arglist__44565){
var args = cljs.core.seq(arglist__44565);
return G__44563__delegate(args);
});
G__44563.cljs$core$IFn$_invoke$arity$variadic = G__44563__delegate;
return G__44563;
})()
;

return null;
});
