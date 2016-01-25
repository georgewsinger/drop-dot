goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17511__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17512__i = 0, G__17512__a = new Array(arguments.length -  0);
while (G__17512__i < G__17512__a.length) {G__17512__a[G__17512__i] = arguments[G__17512__i + 0]; ++G__17512__i;}
  args = new cljs.core.IndexedSeq(G__17512__a,0);
} 
return G__17511__delegate.call(this,args);};
G__17511.cljs$lang$maxFixedArity = 0;
G__17511.cljs$lang$applyTo = (function (arglist__17513){
var args = cljs.core.seq(arglist__17513);
return G__17511__delegate(args);
});
G__17511.cljs$core$IFn$_invoke$arity$variadic = G__17511__delegate;
return G__17511;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17514__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17515__i = 0, G__17515__a = new Array(arguments.length -  0);
while (G__17515__i < G__17515__a.length) {G__17515__a[G__17515__i] = arguments[G__17515__i + 0]; ++G__17515__i;}
  args = new cljs.core.IndexedSeq(G__17515__a,0);
} 
return G__17514__delegate.call(this,args);};
G__17514.cljs$lang$maxFixedArity = 0;
G__17514.cljs$lang$applyTo = (function (arglist__17516){
var args = cljs.core.seq(arglist__17516);
return G__17514__delegate(args);
});
G__17514.cljs$core$IFn$_invoke$arity$variadic = G__17514__delegate;
return G__17514;
})()
;

return null;
});
