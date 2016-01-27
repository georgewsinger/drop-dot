goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53323__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53324__i = 0, G__53324__a = new Array(arguments.length -  0);
while (G__53324__i < G__53324__a.length) {G__53324__a[G__53324__i] = arguments[G__53324__i + 0]; ++G__53324__i;}
  args = new cljs.core.IndexedSeq(G__53324__a,0);
} 
return G__53323__delegate.call(this,args);};
G__53323.cljs$lang$maxFixedArity = 0;
G__53323.cljs$lang$applyTo = (function (arglist__53325){
var args = cljs.core.seq(arglist__53325);
return G__53323__delegate(args);
});
G__53323.cljs$core$IFn$_invoke$arity$variadic = G__53323__delegate;
return G__53323;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53326__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53327__i = 0, G__53327__a = new Array(arguments.length -  0);
while (G__53327__i < G__53327__a.length) {G__53327__a[G__53327__i] = arguments[G__53327__i + 0]; ++G__53327__i;}
  args = new cljs.core.IndexedSeq(G__53327__a,0);
} 
return G__53326__delegate.call(this,args);};
G__53326.cljs$lang$maxFixedArity = 0;
G__53326.cljs$lang$applyTo = (function (arglist__53328){
var args = cljs.core.seq(arglist__53328);
return G__53326__delegate(args);
});
G__53326.cljs$core$IFn$_invoke$arity$variadic = G__53326__delegate;
return G__53326;
})()
;

return null;
});
