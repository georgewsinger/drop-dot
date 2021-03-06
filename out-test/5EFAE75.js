goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15868__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15869__i = 0, G__15869__a = new Array(arguments.length -  0);
while (G__15869__i < G__15869__a.length) {G__15869__a[G__15869__i] = arguments[G__15869__i + 0]; ++G__15869__i;}
  args = new cljs.core.IndexedSeq(G__15869__a,0);
} 
return G__15868__delegate.call(this,args);};
G__15868.cljs$lang$maxFixedArity = 0;
G__15868.cljs$lang$applyTo = (function (arglist__15870){
var args = cljs.core.seq(arglist__15870);
return G__15868__delegate(args);
});
G__15868.cljs$core$IFn$_invoke$arity$variadic = G__15868__delegate;
return G__15868;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15871__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15872__i = 0, G__15872__a = new Array(arguments.length -  0);
while (G__15872__i < G__15872__a.length) {G__15872__a[G__15872__i] = arguments[G__15872__i + 0]; ++G__15872__i;}
  args = new cljs.core.IndexedSeq(G__15872__a,0);
} 
return G__15871__delegate.call(this,args);};
G__15871.cljs$lang$maxFixedArity = 0;
G__15871.cljs$lang$applyTo = (function (arglist__15873){
var args = cljs.core.seq(arglist__15873);
return G__15871__delegate(args);
});
G__15871.cljs$core$IFn$_invoke$arity$variadic = G__15871__delegate;
return G__15871;
})()
;

return null;
});
