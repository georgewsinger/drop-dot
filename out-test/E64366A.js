goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58740__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58741__i = 0, G__58741__a = new Array(arguments.length -  0);
while (G__58741__i < G__58741__a.length) {G__58741__a[G__58741__i] = arguments[G__58741__i + 0]; ++G__58741__i;}
  args = new cljs.core.IndexedSeq(G__58741__a,0);
} 
return G__58740__delegate.call(this,args);};
G__58740.cljs$lang$maxFixedArity = 0;
G__58740.cljs$lang$applyTo = (function (arglist__58742){
var args = cljs.core.seq(arglist__58742);
return G__58740__delegate(args);
});
G__58740.cljs$core$IFn$_invoke$arity$variadic = G__58740__delegate;
return G__58740;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58743__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58744__i = 0, G__58744__a = new Array(arguments.length -  0);
while (G__58744__i < G__58744__a.length) {G__58744__a[G__58744__i] = arguments[G__58744__i + 0]; ++G__58744__i;}
  args = new cljs.core.IndexedSeq(G__58744__a,0);
} 
return G__58743__delegate.call(this,args);};
G__58743.cljs$lang$maxFixedArity = 0;
G__58743.cljs$lang$applyTo = (function (arglist__58745){
var args = cljs.core.seq(arglist__58745);
return G__58743__delegate(args);
});
G__58743.cljs$core$IFn$_invoke$arity$variadic = G__58743__delegate;
return G__58743;
})()
;

return null;
});
