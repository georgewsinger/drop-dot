goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__387692__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__387692 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__387693__i = 0, G__387693__a = new Array(arguments.length -  0);
while (G__387693__i < G__387693__a.length) {G__387693__a[G__387693__i] = arguments[G__387693__i + 0]; ++G__387693__i;}
  args = new cljs.core.IndexedSeq(G__387693__a,0);
} 
return G__387692__delegate.call(this,args);};
G__387692.cljs$lang$maxFixedArity = 0;
G__387692.cljs$lang$applyTo = (function (arglist__387694){
var args = cljs.core.seq(arglist__387694);
return G__387692__delegate(args);
});
G__387692.cljs$core$IFn$_invoke$arity$variadic = G__387692__delegate;
return G__387692;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__387695__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__387695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__387696__i = 0, G__387696__a = new Array(arguments.length -  0);
while (G__387696__i < G__387696__a.length) {G__387696__a[G__387696__i] = arguments[G__387696__i + 0]; ++G__387696__i;}
  args = new cljs.core.IndexedSeq(G__387696__a,0);
} 
return G__387695__delegate.call(this,args);};
G__387695.cljs$lang$maxFixedArity = 0;
G__387695.cljs$lang$applyTo = (function (arglist__387697){
var args = cljs.core.seq(arglist__387697);
return G__387695__delegate(args);
});
G__387695.cljs$core$IFn$_invoke$arity$variadic = G__387695__delegate;
return G__387695;
})()
;

return null;
});
